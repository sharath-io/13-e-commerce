export default function NavigationTop(){
    return <nav class="navigation" id="nav-id">
    <div class="nav-brand">
        <a href="../../index.html" class="icon"><i class="fa fa-bolt meta-icon"></i></a>
        Meta-Store
    </div>

    <ul class="list-non-bullet nav-list">
        <li class="list-item-inline">
            <a class="link link-active" href="index.html">Home</a>
        </li>
        <li class="list-item-inline">
            <a class="link" href="pages/products.html">Products</a>
        </li>
        <li class="list-item-inline">
            <a class="link" href="pages/wishlist.html"><i class="fa fa-heart meta-icon"></i></a>
        </li>
        <li class="list-item-inline">
            <a class="link" href="pages/cart.html"><i class="fa fa-shopping-cart meta-icon"></i></a>
        </li>
        <li class="list-item-inline">
            <a class="link" href="pages/login.html"><i class="fa fa-user meta-icon"></i></a>
        </li>
        <li class="list-item-inline login">
            <a class="link" href="pages/logout.html">logout</a>
        </li>
    </ul>
</nav>
}