<template>
    <div class="col-sm-8 col-4 py-0">
        <div class="d-none d-sm-block">
            <div class="header__searchbar input-group align-items-center border rounded-pill">
                <span class="px-2"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control form-control-sm border-0 rounded-pill" placeholder="Search Recipe"
                    v-model="searchQuery" @input="handleSearch" />
            </div>
        </div>
        <div class="d-block d-sm-none border-end text-end px-3" @click="toggleSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const handleSearch = () => {
    // Lakukan sesuatu ketika pengguna mulai mengetik
    console.log("Search query:", searchQuery.value);
    // Anda dapat menambahkan logika pencarian atau mengirimkan sinyal ke komponen lain
};

const toggleSearch = () => {
    // Lakukan sesuatu ketika ikon pencarian di klik pada mode tampilan seluler
    console.log("Toggle search");
    // Anda dapat menambahkan logika untuk menampilkan formulir pencarian atau
    // membuka panel pencarian pada mode tampilan seluler
};
</script>