# Poooding react boiler plate SPEC
<br><br>
# Basically, it includes as follows...

1. React-Router
2. Redux
3. Immutable JS
4. Redux-Thunk
5. React-Dom
6. React-Router-Dom
7. prop-types
8. Validator
9. axios
10. sass
<pre><code>
How to use : 
import styles from './NavigationBar.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
</code></pre>
  

# And this project has directory structure as follows...
# It follows DUCKS structure and HOC concept...
<pre><code>
@ src 
<br>
    > API : Functions to call server features<br>
    > Pages<br>
    > Containers<br>
    > Compontents<br>
    > Modules : Composed Reducers and Actions<br>
    > Utils : Multiple functions to use in logic<br>
    > Router<br>
<pre><code>

# Also, this project has basic logic as follows

1. If you want to send validated data t server, Should be logined and store token in header


#Notice

1. Only use Immutable.js on global state 
