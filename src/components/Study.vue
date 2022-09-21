<script setup>
    import {mode, filteredDoneNumbers, doneNumbers as notDone} from "../Study.ts"
    import data from "../assets/periodic.json"
    import {ref, computed} from 'vue'
    const elements = data['elements']
    const random_number = ref({})
    const textinput = ref('')
    const getQuestion = () => {
       
        const doneNumbers = notDone.value.slice(filteredDoneNumbers.range[0], filteredDoneNumbers.range[1])
        console.log(doneNumbers)
        //notDone is all elements by default
        if (notDone.length == 0) {
            notDone.value = elements
            
        }
        
        random_number.value = doneNumbers[Math.floor(Math.random() * doneNumbers.length)]
        // notDone.value = notDone.value.filter((element) => {
        //         console.log(random_number.value.name != element.name)
        //         return random_number.value.name != element.name
        // })
                //this code breaks everythiung
       
       
    }
    getQuestion()

    let correct = ref('')
    const onsubmit = () => {
        if (textinput.value.toLowerCase() == random_number.value.name.toLowerCase()) {
            correct.value = "Correct"
            setTimeout(() => {
                getQuestion()
                correct.value = ""
                textinput.value = ""
            }, 500);
        } else {
            correct.value = "Incorrect: " + random_number.value.name
        }
    }
</script>

<template>
    <div v-if="mode == 'symbol'" id="questions">
        <p>Type the name of this element in...or else.</p>
        <div class="symbol">
            <p>{{random_number.symbol}}</p>
        </div>
        <input v-model="textinput" class="elementname" @keyup.enter="onsubmit"/>
      
    </div>
    <div v-if="mode == 'names'" id="questions">
        <p>Type the name of this element in...or else.</p>
    </div>
    <h1>{{correct}}</h1>
    <!-- {{random_number}} -->
    

</template>

<style scoped>
    .symbol {
        width: 10rem;
        height: 10rem;
        border: 1px solid black;
        font-size: 4rem;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    
    }
    .symbol p {
        margin: 0;
    
    }
    .elementname {
        margin-top: 1rem;
    }
</style>