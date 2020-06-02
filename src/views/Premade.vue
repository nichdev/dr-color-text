<template>
    <div>
        <div class="color-box">
            <swatches-picker v-model="colors" />
        </div>
        <div class="btn-box">
                <button @click="copyText()" id="hexCode" class='hexCode bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5' v-if="colors">[{{(colors.hex || '').substr(1)}}[-]]</button>
        </div>
        <div class="preview-box">
            <div>
                <p class="preview-text shadow-lg text-left" :style="{ color: colors.hex}">{{chat}}</p>
            </div>
            <img width="80px" src="../assets/djavatar.png" alt="avatar">
        </div>
    </div>
</template>

<script>
import { Swatches } from 'vue-color'

export default {
    components: {
        'swatches-picker': Swatches,
    },
    data() {
        return {
            colors: '',
            chat: 'Do you love Dragon Raja? Click the code to copy after choosing your disered color!'
        }
    },
    methods: {
        copyText() {
            let text = document.getElementById('hexCode').innerText
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
            this.chat = `Copied! Just paste it in your game chat like this: [${(this.colors.hex || '').substr(1)}[-]]Hello`
            setTimeout(() => {
                this.chat = 'Ready to choose another color? Click the code to copy after choosing your disered color!'
            }, 5000);
        }
    }
}

</script>

<style lang="scss">
    .btn-box {
        box-sizing: border-box;
        height: 50px;
    }
    .vc-swatches {
        width: 100% !important;
        height: auto !important;
        overflow: auto !important;
        
    }
    .color-box {
        padding: 0 15px;
        max-width: 1040px;
        margin: 0 auto !important;
    }
    .hexCode {
        font-weight: 700;
    }
    .preview-text {
        font-weight: 600;
        border: 2px solid black;
        border-radius: 10px;
        margin-right: 20px;
        padding: 10px 20px;
        background: #fefefe;
        
    }
    .preview-box {
        display: flex;
        align-items:center;
        justify-content: center;
    }
</style>

