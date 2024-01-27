<template>
    <div class="container">
        <div class="header-content">
            <div class="header-title">
                <h1>TIK.ET</h1>
            </div>
            <div class="header-menus">
                <div class="menu navigasi">
                    <ul type="none">
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">NEWS</a>
                        </li>
                        <li>
                            <a href="#">CAREERS</a>
                        </li>
                    </ul>
                </div>
                <div class="menu social">
                    <ul type="none">
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-square-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* Header */
.header-content {
    display: flex;
    justify-content: space-between;
}

.header-menus {
    display: flex;
}

.menu ul {
    display: flex;
}

.menu ul li {
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.menu ul li a {
    font-weight: 900;
}

.menu.navigasi ul li:hover a {
    color: #00abb3;
}
</style>