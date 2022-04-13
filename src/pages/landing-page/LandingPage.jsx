import './landing-page.css';

import banner from '../../assets/images/banner.jpg';
import game from '../../assets/images/game.jpg';
import pc from '../../assets/images/pc.jpg';
import headphones from '../../assets/images/headphones.jpg';
import NavigationTop from '../../components/navigation/NavigationTop';

export default function LandingPage(){
    return (
        <div>
           <NavigationTop/>

    <div class="main-content">
        <div class="main-image">
            <img class="banner-img fit" src={banner} alt="laptop"/>
        </div>
        <div class="text-overlap flex-center">
            <div class="meta-info">
                <i class="fa fa-bolt"></i> Meta Store
                <p class="description">Meta Store is a store from future.</p>
                <p class="description">don't be too late to experience </p>
                <p class="description">Every device sold in meta store is compatible with the VR</p>
                <div class="card-button">
                    <button class="card-buy" onclick="window.location.href='#explore-categories'">Meta devices</button>
                </div>
            </div>
        </div>
    </div>

    <div class="categories" id="explore-categories">
        Shop By categories

        <div class="card-container">

            <div class="card  card-shadow">
                <div class="card-image fit">
                    <img src={headphones} alt="Headphones"/>
                </div>
                <div class="card-heading">
                    HeadPhones
                </div>
                <p class="tag">soundzy</p>
                <div class="card-description">
                    Best in sound quality
                </div>
                <div class="card-button">
                    <button class="card-buy" onclick="window.location.href='pages/products.html'">Explore</button>
                </div>
            </div>

            <div class="card card-shadow">
                <div class="card-image fit">
                    <img src={game} alt="Games"/>
                </div>
                <div class="card-heading">
                    Gaming Computers
                </div>
                <p class="tag">nextgen</p>
                <div class="card-description">
                    Best in Experience
                </div>
                <div class="card-button">
                    <button class="card-buy" onclick="window.location.href='pages/products.html'">Explore</button>
                </div>
            </div>

            <div class="card card-shadow">
                <div class="card-image fit">
                    <img src={pc} alt="Personal Computer"/>
                </div>
                <div class="card-heading">
                    Laptops
                </div>
                <p class="tag">perfect</p>
                <div class="card-description">
                    Best in Perfomance
                </div>
                <div class="card-button">
                    <button class="card-buy" onclick="window.location.href='pages/products.html'">Explore</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="row">
            <div class="footer-col">
                <ul>
                    <li>
                        <h4> Any queries </h4>
                    </li>
                    <li>Waranty</li>
                    <li>Refund Policy</li>
                    <li>Contact details</li>
                    <li>terms & conditions</li>
                </ul>
            </div>

            <div class="footer-col center">
                <ul>
                    <li>
                        <h4> Company </h4>
                    </li>
                    <li>Careers</li>
                    <li>Our Achievements</li>
                    <li>About our mission</li>
                    <li>Employee Experience</li>
                </ul>
            </div>

            <div class="footer-col center">
                <ul>
                    <li>
                        <h4> Any queries </h4>
                    </li>
                    <li><i class="fa fa-twitter-square"></i></li>
                    <li><i class="fa fa-facebook-square"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                    <li><i class="fa fa-whatsapp"></i></li>
                </ul>
            </div>
        </div>
    </footer>
</div>
        
    )
}