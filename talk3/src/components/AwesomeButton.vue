<template>
    <input class="button" type="submit" :value="value" :style="{ color: color, 'background-color': bgColor }" />
</template>

<script>
    export default {
        props: ['value', 'color', 'bgColor']
    }
</script>

<style>
</style>
