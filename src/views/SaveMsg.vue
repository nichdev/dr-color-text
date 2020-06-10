<template>
    <div>
        <textarea id="saveTextInput" v-model="inputMsg" placeholder="Enter text" class="shadow appearance-none border rounded focus:outline-none p-4" cols="35" rows="3"></textarea>
        <div class="btn-box">
          <button @click="saveMsg('1')"  class="copy-btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Save Slot 1</button>
          <button @click="saveMsg('2')"  class="copy-btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Save Slot 2</button>
          <button @click="saveMsg('3')"  class="copy-btn bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Save Slot 3</button>
        </div>
        <div class="savedMsg-box">
            <p><b>Saved Msg 1: <button @click="copyMsg(1)" class="copy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Text</button></b><br> <span id="msg1">{{savedMsg1}}</span></p>
            <p><b>Saved Msg 2: <button @click="copyMsg(2)" class="copy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Text</button></b><br> <span id="msg2">{{savedMsg2}}</span></p>
            <p><b>Saved Msg 3: <button @click="copyMsg(3)" class="copy-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Text</button></b><br> <span id="msg3">{{savedMsg3}}</span></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    button {
        margin: 10px;
    }
    .savedMsg-box {
        text-align: left;
        max-width: 400px;
        margin: 70px auto;
        padding: 0 15px;
        p {
            margin-bottom: 16px;
        }
    }
</style>

<script>
export default {
    data() {
        return {
            inputMsg: '',
            savedMsg1: '',
            savedMsg2: '',
            savedMsg3: ''
        }
    },
    methods: {
        saveMsg(val) {
            let slot = 'slot' + val
    
            localStorage.setItem(slot, this.inputMsg)
            console.log(localStorage.getItem(slot));
            this['savedMsg'+val] = localStorage.getItem(slot);
        },
        copyMsg(val) {
            let text = document.getElementById('msg'+ val).innerText
            let elem = document.createElement("textarea")

            document.body.appendChild(elem);
            elem.value = text;
            /* Select the text field */
            elem.select();
            elem.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");
            document.body.removeChild(elem);
        },

    },
    mounted() {
        this.savedMsg1 = localStorage.getItem('slot1');
        this.savedMsg2 = localStorage.getItem('slot2');
        this.savedMsg3 = localStorage.getItem('slot3');
    },
}
</script>