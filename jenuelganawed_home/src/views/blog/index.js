import UnderContruction from "./../../components/PageUnderContruction/pageUnderConstruction.vue";
import BackButton from "./../../components/backButton/backButton.vue";
import {getPOSTS} from './../../constants/request.js';
import BlogItems from './components/blog-item/blogItem.vue';
import { mdiBlogger } from '@mdi/js';

export default {
     components:{
          UnderContruction,
          BackButton,
          BlogItems
     },
     data() {
          return {
               blogItems: [],
               blogIcon: mdiBlogger
          }
     },
     methods: {
     },
     mounted() {
          getPOSTS().then(result => {
               this.blogItems = result.data.items;
               console.log(result.data.items);
          })
          .catch(error => {
               console.log(errpr);
          });
     },
}