<script setup>
    import StudyButton from "./StudyButton.vue"
    import {filteredDoneNumbers} from "../Study.ts"
    import {ref} from "vue"
    const atomicNum = ref('')
    const studyStart = () => {
        
    }
    const onenter = () => {
        let range = atomicNum.value.split('-')
        range = range.map((num) => {
            return parseInt(num)
        })
        range[0] = range[0] + -1
        
        filteredDoneNumbers.setRange(range)
    }
</script>

<template>
    <h1>ETHAN STUDY THINGY OH GOD I DONT HAVE MUCH TIME</h1>
    <div id="app">
        <div id="buttons">
            <StudyButton text="Symbols" image="https://media.istockphoto.com/vectors/iron-periodic-table-element-icon-on-white-background-vector-vector-id940919230?k=20&m=940919230&s=612x612&w=0&h=cHf6U4E-nd4_pYMDZQFKxnGm5pLCoa6ra8oBFhw_AiQ="></StudyButton>\
            <StudyButton text="Element Names" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAw1BMVEX///8AAAAREiTa2tuDg4N6enqxsbF/f3/FxcXOzs6cnJz09PTl5eXX19egoKAODyK/v79PT0/t7e06OjpbW1u5ubmOjo5wcHAAABfp6emurq6UlJT5+fny8vKenp7KysoAABxXV1crKyskJCRqamo7OzsdHR0AABNERERhYWEiIiIREREZGRmUlJoyMjJJSUliY2uop60eHy2CgoopKjhBQUxtbnYAAB97e4NSU1uam6IAAAteX2g0M0BKSlQjJTM3OUNFQdXiAAALMklEQVR4nO2dCXuiOhSGjagV2ZSKC9KK1rrUYq0oV63W/v9fdbOg0tDpDIuS6eSbx4GiQl5JTpKTk5DLcXFxcXFxcXFxcXFxcXFxcXFxcXFx/bMyi8zLjAV2A5hXMRZYIetk/143HIwGq3TLjKqrJgLrxvrmVSQmAiunnJoUxcFC+ifBJCt+ilJSemC62vT31Fr/sagnTloypQVWrQMwI7svpBKR00hefKUDVsUot3i/AUBHrk7BOKUUxlQ6YCq47dR8sCGYwP9LACjppDCm0gFTIESdgAkAlNAW3rd0UhhT6RkPH0zxjwJQSJ66BEodTIYtSLSN22lIS6mD5frgSYLd0J8HhixkcQz/a6SQvPhKHyxXQaYfGn01eeoS6AJgOb1qyPLPMPdIZzCkInhMlK7EugxYG75pJExZQl0ATKq/fG86dCWorz8jKZ8lShGTlx5YDfTJzh18Y1b95pvmJ4/L1ymeUX6ZWtTkpQcmlkWyYxll4dtvln4PVqS4+lFvWCY96N+DmRQX+P6X+kpMggk0VwxDxCKY9ExxxWnDsAhWp7h6cS7CIFiH4opuOJDYAyvTBSy64UBiDqxNc8VswTAHNqa44nZ+WAOja+ZJrCvkmAOja+Z4hgOJLTCZLmDxva5MgUlDiuu7pvRvxBTYhOJK4jVhCYyumeuxzu6LIbAuxfWcaCyKHbBQzRyvxXEUO2AvFFdCnwkzYHTNnNTdygpYieKK1VUJihEwus/8FLvFcRQbYNYtBZbMcCCxAUZH0qXgbGUCrEpxpTFOwwKYTnElNhxILIDVPnPNEhsOpOzBQk3E5IYDKXsw2nmToKsSVPZgUwospYHQ7MFCSidWiUGwyCNGX4pBsHQyI4tgoB3rtJ/FJFgamZFJsDQyI5tgKVhGRsESOaiwGAUD8SYSBcQKWKFBHUgaLM0IWDNnPXw+EnuYxRcbYKhI0Y3hUqxzn8QE2As+3Ew1M7IANiO+bIs6nCwzMgDWv/OPGxRZIpdO9mDDc5ajhpGmSTJj9mABTwA9oNn89Tl+q+zBgq4blSL7KSOaudwjRRZ/iIwxMNqHHz8zMgYW8sXFnlPIGliOGp4YxvWeMgcmUrcs7kQS5sBCQ5tirGswCGZR8aUxgwfYAwsNKsVLHoNguUEamZFFsDsKbBjnIiyChfo1cSZFMglGDwXGmbHFJhjdzJ9Ft4xsgoWa+dGH2xkFo1tW0cdvWQWjm/n9qBfJAuxP5o/laAdqVMuYBZgkB/WrT8mUIl6Er8ASEgfLRhwsJA6WjThYSBwsG3GwkDhYNuJgIXGwbMTBQuJg2ehiYEKnglSKOQqEZfbiB0RcDOw0ZtIPeSvE8p8NU1rDBNF9FwQbK6IoVnvh2OXxn46fVIvxp7lcEMwPWa6HPGe1a6yednmwLlnNVCn0Biq6Aao6A4UK8uzq95NewWcUC72JSu6P3KnXGzj/Gh24qXawF7hbgbe53GnLjd6kBD8EN9/m08uDCXhIAX4aLSSgoBUlkUo4Jmz44C8zCd9+8h3ZsHBOpyR2tocW+x6QYLEGuEfj0yTcqkniyV4yBSuhiW4q6IuS3kFBiO32C6i2LTSiUpWsMo7YLoO+IOkF8JTLSQAY0l0JH56gwtg8gql4yqOp68guFfQ7ZfhdfNzFwYQp/PElP+C8iMtbDRsP4xav3tpE9wanOmc9QTtTJhHcA3T4CzA87HJDzn3/nd/7gmBPg8FgMsMBlVU/1wh44bvaySpakoWzmApejjWWAJ5PNvMLMDzVQCV8BhhkAoY1raPY3spxgAsHxB7BzN4DKk0wrVYNgF6D2JEGAOObssUwWM1Cwn90josG40rNB6uBaeFerZO0GmipgTHOryKKGphWGQY7/6H6pUEHw7sjmEpC2zqniSwitHj+rtDAQRDsg8GCEzhIwJokzBInuFHAdxY1ScyCQA43TmA4UL3DJBhMMk7RLU7kEQylTn5A78zIXXmE9VyD3MgCqt8wWIXEic3YBBNgpVpSH0jIeRP0VAVdeaCiiLAGXnylUDLHqI0Ca4a6WWriwjhBFTSs74omCmNkBuxTu0AYn8db5WecSjwUXTTxD1DGMbNNFKgu48X6xshE4pYH+dykQFoeGOz+CPZNaP7FwCz97vOBdlc5HpFEEZUpSelC4+9/Tu6Kx6pMF0XSIbjTLfLxbhueD+5L5IClS4HN1+I96JA4WDbiYCFxsGzEwULiYNnoumBStVQ+BYuKgX0ixTBO3lXBME5uYKtcivwTXhWsgDvVpP9VPTqrThL66EgPN5PaeIm74rGbihTRKXxNsCaYmejZe4hGgS3icic49U0agmbZqOHFm6wZmFRLfdKDuYe/RbcTdcrmFcEU8CDhK6KnXr3gO1AF/VNuvMcYEElE/RLkqtKHyA9pkSBuAzxESt4VwQy/14Lm8cl+MgNu/B7ZxX0t3wmOPQo66X3fTQF9wm91RTDLf44cAlP83lqFOIKhpAcyb7GMOllTsq+gnqcOpmj/DjAL5quEstkRzDz5PI8JF1Eh8ydnCjjG+RFfxoy4FMZ1wWSjVAQzHfX3n7H1q4TAFNSjrpEzKxhMeAYFswj60QYBrwuG47fxU0VfsKdROU8V0INgKh6hkWrk6XpkdkHEa10XrF2u+nYbIg1M5Mo5Pn7tE5j1AB7VzhTgx/WoYGYoZtRJ0dcvYzIJte+i6rijnmqncxlDzh29hxw42JDIxCq2fxmh/7UyaCv2/EfcCooOC9OxDSU9E7Cu73qSFRnmXPXka8sNot2yK4KpY3J3BuevyYFnN/p1lxlIziNyLlb83NqM1vS4Ipjp34vzEiTtfuAuNIiBrJ1P2sRtEYN4Xq3baFMarwgmweahrAt1f5591yj6NlF4REhtNFrZbvjTc5Rqpw/GeEXaJ3ADvzaJ+Nyva5YxhSylWMdGAE3EfCCZ657YBX9EjUyoQqalQVoqwhM+fstyPWYUmp3jo6HMU99LqpDz6GrxxvQbxdVgSI/RaDaiXor3oEPiYNmIg4XEwbIRBwupcOxasalkYMX7CqO6v0kExrg42CfRj0tgUPFWSBLNEuMyk4TGc3FxcXFxcXFxcXFxcXFxcXFxcXH9MxJ+qHJZu98vpVz+h4qD/W3ywTT/lQ9s83nbzmvnv+CeZp//ZFwETPvQ8tpyQfb3x/dau81o+XFCede0w27/t5ARMHs+t1tOa9TKt0bAydujUUsbAfP19dXbghEAmg3AXgTgw139XWDawhkt3LXjgrXjuc7ecdbv242wAcDTd44iLleC8F5eKcvVVe+YhpTHL1QKyBZt8lrgX95GJcS24Qa+NDsIlh85ec/zWp43B8D9z8kDb715W4mC6zlLEczN8gc4tBV87uup5R3Wb/nRYb9qHWx77cBfddE67HcQZmEf7IW9GHnz7cZZw1TON+u5s3Gdj61nB8Hs3c7dOXNvvbJHrrZ9a83dd/sN2MLaeTfAh9F9Gy1l8XDdfKi9e+vXsueuXdfdvXqeCzPTzt0Yq7ft3IH569VZzT+ct3V+4znOwVu7c2e727utIJimva4XjrZcbrXFbuft8s5uY289p7sSloJXXTvGetV9F96uCpYfGcstvB07WEY8D6HBIuLutvPF6+YV/uLrnbvwtnt3s93vXlcOZt04zigIlre9hb1srLWl443mYO4ulntt47it0e79P2c3eoNZ0gPelU2HttC0j7eVtrdX2mKxb+0X+9Eqv1guF3toxxeHxQreioV22OzhOxttNVoeWityw84VNCx/WsvGL/ivhUqTDW0jPK6NYK61R7BUXr0WQ7biaCS004so/8Uh/GkK7KeJg/1t+rFg/wMvOg2XxSnIOwAAAABJRU5ErkJggg=="></StudyButton>
        </div>
        <div id="settings">
            <h1>SETTINGS</h1>
            <label for="atomicNums"> Atomic Number Range: </label>
            <input v-model="atomicNum" @keyup.enter="onenter" type="text" id="atomicNums"/>
        </div>
    </div>
</template>

<style>
    #app {
        display: flex;
    }
    #buttons {
        display: flex;
    }
</style>