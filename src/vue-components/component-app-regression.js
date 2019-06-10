/* global Vue FileReader fetch */
class RegressionApp {
  constructor () {
    this.x = []
    this.y = []
    this.nextX = 0
    this.error = false
    this.response = false
  }
  get component () {
    return {
      template: this.template,
      data: this.data,
      methods: this.methods,
      computed: this.computed
    }
  }
  get template () {
    return `
<div>
  <app-card title="Correlation">
    <table v-if="response">
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, field) in response">
          <th>{{ field }}</th>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddonX">Upload X</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" @change="handleInputX" id="inputGroupFileX" aria-describedby="inputGroupFileAddonX">
        <label class="custom-file-label" for="inputGroupFileX">Choose file</label>
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupFileAddonY">Upload Y</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input" @change="handleInputY" id="inputGroupFileY" aria-describedby="inputGroupFileAddonY">
        <label class="custom-file-label" for="inputGroupFileY">Choose file</label>
      </div>
    </div>

    <app-input @input="updateNextX" :value="nextX" @submit="submit">Get Regression</app-input>

    <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
  </app-card>
</div>
    `
  }
  get data () {
    let { x, y, nextX, error, response } = this
    return () => ({ x, y, nextX, error, response })
  }
  get methods () {
    return {
      submit: this.submit,
      handleInputX: this.handleInputX,
      handleInputY: this.handleInputY,
      loadContent: this.loadContent,
      updateNextX: this.updateNextX,
      sendRequest: this.sendRequest
    }
  }
  get computed () {
    //
  }
  submit (label) {
    if (this.x.length > 0 & this.y.length > 0) {
      this.error = false
      this.sendRequest()
    } else {
      this.error = 'You must upload X and Y first'
    }
  }
  handleInputX (event) {
    let files = event.target.files
    if (files.length) {
      this.loadContent(files[0], 'x')
    }
  }
  handleInputY (event) {
    let files = event.target.files
    if (files.length) {
      this.loadContent(files[0], 'y')
    }
  }
  loadContent (file, dest) {
    let reader = new FileReader()
    reader.onload = (event) => {
      let content = event.target.result
      this[dest] = content
        .trim()
        .split(/\n/g)
        .map(line =>
          JSON.parse(line.trim()))
        .join(',')
    }
    reader.readAsText(file)
  }
  updateNextX (event) {
    this.nextX = parseInt(event.target.value)
  }
  sendRequest () {
    fetch(`http://localhost/regression?x=${this.x}&y=${this.y}&nextX=${this.nextX}`)
      .then(response => {
        if (response.status === 200) return response.json()
        else throw new Error(`Server responded with status ${response.status}`)
      }).then(json => {
        this.response = json
      }).catch(error => {
        this.error = error.toString()
      })
  }
}

Vue.component('regression-app', new RegressionApp().component)
