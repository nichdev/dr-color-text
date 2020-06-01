<template>
  <div class="home">
    <h1 class="text-4xl">Dragon Raja Color-Text Generator</h1>
    <div class="preview-box shadow">
      <b>Preivew</b>
      <p id='c-box' class="">
        
      </p>
    </div>
    <p>
      <small>There's a character limit in game. Therefore only 16 characters.</small>
    </p>
    <textarea placeholder="Enter text" class="shadow appearance-none border rounded focus:outline-none p-4" v-model="inputText" cols="35" rows="3" maxlength="16" @keyup="charCount()"></textarea>
    <p>{{charNum}}/16</p>
    <br>
    <button @click="generateColorText()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Generate Rainbow Text</button>
    <br><br>
    <div class="generatedBox mt-4">
      <p>Copy the generated text and paste it in Dragon Raja game chat!</p>
      <p id="generatedText">
        {{outputText}}
      </p>
      <button @click="copyText()"  class="copy-btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Copy Text</button>

    </div>


    <br>
  </div>
</template>

<script>



export default {
  data() {
    return {
      inputText: '',
      outputText: '',
      charNum: 0
    }
  },
  methods: {
    generateColorText(){
      let input = this.inputText.split('')
      let colors = ['red', 'orange', 'yellow', 'green', 'violet', 'blue']
      let hex = ['E23838', 'F78200', 'FFB900', '5EBD3E', '973999', '009CDF']
      // let element = document.querySelector(".display-box");
      document.getElementById('c-box').innerHTML = ''
      this.outputText = ''
      console.log(input);
      for(let i=0; i < input.length; i++){
        
        let str = `[${hex[i%hex.length]}[-]]${input[i]}`

        this.outputText += str

        
        // element.insertAdjacentElement('afterend', "<span>test</span")
        document.getElementById('c-box').insertAdjacentHTML('beforeend', `<span class="${colors[i%colors.length]}">${input[i]}</span>`)
        // `<span class="${colors[i%colors.length]}">text test</span>`
      }
    },
    charCount() {
      this.charNum = this.inputText.length
    },
    copyText() {
      let text = document.getElementById('generatedText').innerText
      let elem = document.createElement("textarea")

      document.body.appendChild(elem);
      elem.value = text;
      /* Select the text field */
      elem.select();
      elem.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");
      document.body.removeChild(elem);
      console.log('copied');
    }
  },
}
</script>

<style lang="scss">
  .home {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .preview-box{
    box-sizing: border-box;
    padding: 30px;
    max-width: 600px;
    margin: 40px auto;
  }
  .red{
    color: #E23838;
  }
  .orange{
    color: #F78200;
  }
  .yellow{
    color: #FFB900;
  }
  .green{
    color: #5EBD3E;
  }
  .violet {
    color: #973999;
  }
  .blue {
    color: #009CDF;
  }
  .copy-btn {
    margin-top: 20px;
  }
  #c-box{
    margin-bottom: 40px;
  }
  #generatedText{
    display: flex;
    padding: 0;
    --bg-opacity: 1;
    background-color: #2d3748;
    background-color: rgba(45,55,72,var(--bg-opacity));
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    padding: 40px;
    border-radius: .5rem;
  }
</style>
