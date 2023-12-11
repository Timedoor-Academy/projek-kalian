<!-- -----footer > WebFooter.vue----- -->
<template>
    <footer class="container-fluid py-5" style="background-color: #f5f5f5">
        <div class="container-md">
            <div class="row">
                <LeftFooter />
                <div class="col-md-5 col-sm-1 col-12"></div>
                <RightFooter />
            </div>
        </div>
    </footer>
</template>

<script setup>
import LeftFooter from './LeftFooter.vue';
import RightFooter from './RightFooter.vue';
</script>