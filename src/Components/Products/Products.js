import React from 'react';
import sb from '../../Services/StringBundleService';
import { Image } from 'semantic-ui-react'
import './Products.css';

const Products = ({}) => (
    <div className="Products">
      <h1>OUR PRODUCTS</h1>
      <div class="ProductDetailBox">
        <h2>EOS Knights</h2>
        <div className="Desc">Collect materials. Craft your own items.</div>
        <Image src={require('../../Images/ek.jpg')} className="TitleImage"/>
        <h3>66M+</h3>
        <div className="ProductDesc">Transactions</div>
        <h3>30K</h3>
        <div className="ProductDesc">Users</div>
        <h3>428K EOS</h3>
        <div className="ProductDesc">Trading Volume</div>
      </div>

      <div className="ProductDetailBox">
        <h2>Knight Story</h2>
        <div className="Desc">First mobile blockchain game for everyone.</div>
        <Image src={require('../../Images/ks.jpg')} className="TitleImage"/>
        <div className="ProductDesc">Coming soon</div>
      </div>
    </div>
)

export default Products;