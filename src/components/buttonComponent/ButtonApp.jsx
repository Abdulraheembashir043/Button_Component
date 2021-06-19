import React from 'react';
import './ButtonApp.css';
import cart from '../../images/shopping_cart_white.svg';
import NavBar from '../navbarComponent/NavBar';
import Button from '../buttonComponent/Button';

function ButtonApp() {
  return (
    <div>
      <NavBar />
      <main>
      <h1 className='heading'>Buttons</h1>
        <div>
          <Button
            child='Default'
            styles='default'
            head='<Button />'
            title='titleFont default-title'
          />
          <Button
            child='Default'
            styles='default default-right'
            head='&:hover, &:focus'
            title='titleFont default-right-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='outline'
            head='<Button variant="outline"/>'
            title='titleFont outline-title'
          />
          <Button
            child='Default'
            styles='outline outline-right'
            head='&:hover, &:focus'
            title='titleFont default-right-title outline-right-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='text'
            head='<Button variant="text"/>'
            title='titleFont text-title'
          />
          <Button
            child='Default'
            styles='text text-right'
            head='&:hover, &:focus'
            title='titleFont default-right-title text-right-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='disableShadow'
            head='<Button disableShadow/>'
            title='titleFont disableShadow-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='disabled'
            head='<Button disabled/>'
            title='titleFont disabled-title'
          />
          <Button
            child='Default'
            styles='text text-disabled'
            head='<Button variant="text" disabled/>'
            title='titleFont text-disabled-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='icon'
            head='<Button startIcon=”local_grocery_store” />'
            title='titleFont icon-title'
            icon={cart}
            img='img'
          />
          <Button
            child='Default'
            styles='icon icon-right'
            head='<Button endIcon=”local_grocery_store” />'
            title='titleFont icon-title icon-title-right'
            icon={cart}
            img='img-right'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='smSize'
            head='<Button size=”sm” />'
            title='titleFont sm-title'
          />
          <Button
            child='Default'
            styles='mdSize'
            head='<Button size=”md” />'
            title='titleFont md-title'
          />
          <Button
            child='Default'
            styles='lgSize'
            head='<Button size=”lg” />'
            title='titleFont lg-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='default default2'
            head='<Button color=”default” />'
            title='titleFont sm-title default2-title'
          />
          <Button
            child='Default'
            styles='mdSize primary'
            head='<Button color=”primary” />'
            title='titleFont md-title primary-title'
          />
          <Button
            child='Secondary'
            styles='secondary'
            head='<Button color=”secondary” />'
            title='titleFont lg-title secondary-title'
          />
          <Button
            child='Danger'
            styles='danger'
            head='<Button color=”danger” />'
            title='titleFont danger-title'
          />
        </div>
        <div>
          <Button
            child='Default'
            styles='default default2 downDef'
            head='&:hover, &:focus'
            title='titleFont sm-title default2-title down-title'
          />
          <Button child='Default' styles='mdSize primary downPri' />
          <Button child='Secondary' styles='secondary downSec' />
          <Button child='Danger' styles='danger downDan' />
        </div>
        <footer>
          <p>https://material.io/resources/icons/?style=round </p>
          <p>created by <span className='name'>BashDev</span> - devChallenges.io</p>
        </footer>
      </main>
    </div>
  );
}

export default ButtonApp;
