### TEMPORAL DEAD ZONE

#### What is temporal dead zone?
<details>
<summary>
Answer
</summary>
<p>It is the state where variables are unreachable</p>

```let``` and ```const``` in Es6 are blocked scope which means they can only be accessible within scope
{

}

```var``` on other hand doesn't have any restrictions.
</details>


--------
### Exercises

#### Q1.
```javascript
 let a=34;
{
     let a=32;
     console.log("2",a)
}
 console.log(a)
 ```
 #### Q2.
```javascript
 let a=34;
{
      a=32;
      console.log("3",a)
}
 console.log(a)
 ```

Q3
```javascript
let a=100;
const App2=()=>{
console.log("2",a)
a=33;
}
App2()
```

Q4.
```javascript
let a=42;
{
    let a=100;
}
console.log(a)

```
Q5.
```javascript
     let a=100;
function App(){
    console.log("1",a)
    let a=42;
    console.log("2",a);{
        let a-100;
    }
    console.log("3",a);
}
App();

```

<details>
<summary>
Answer
</summary>
<p></p>


</details>







