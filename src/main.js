import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Thing } from './thing.js'

$(document).ready(function(){
  let thing = new Thing();
  console.log(thing.thingFunction());
});
