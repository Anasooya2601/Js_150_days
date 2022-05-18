### HOISTING
---
Q Define hoisting
<details>
<summary>
answer
</summary>
<p>Hoisting is when the <b>JavaScript interpreter</b> moves all variable and function declarations to the top of the current scope.</p>
<h4>
`JS interpreter` first scans the whole code.
<li>
variable declaration and function declaration
</li>
<li>
executes the code
</li>
</h4>
</details>
Exercise

Q1.
```JAVASCRIPT
let a=undefined;
console.log("1",a);
a=34

```

Q2.
```JAVASCRIPT
console.log(bar);
var bar = 'bar';
console.log(bar);
```
Q3.

```JAVASCRIPT
foo();
function foo() {
    console.log(bam);
    var bam = 'bam';
}

console.log(bam);

```

Q4.

```JAVASCRIPT

function foo() {
    var bam;
    console.log(bam);
    bam = 'bam';
}
foo();
console.log(bam);

```

