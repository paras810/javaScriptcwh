class employee {
    constructor(givenName, givenExp, givenDiv) {
        this.name = givenName,
            this.exp = givenExp,
            this.div = givenDiv
    }
    slogan() {
        return `hello my name is ${this.name}`
    }
    joiningYear() {
        return `${this.name} joined this company in ${2022 - this.exp}`
    }
    static sum(a, b) {
        return a + b
    }
}
// inheritence
class programmer extends employee {
    constructor(givenName, givenExp, givenDiv, givenLan, givenGithub) {
        super(givenName, givenExp, givenDiv)
        this.lang = givenLan
        this.github = givenGithub
    }
    favLang(){
        if(this.lang === 'javaScript'){
            return `${this.name} favourite language is JavaScript`
        }
        else{
            return `${this.name} favourite language is python` 
        }
    }
    static multiply (x, z){
        return x * z
    }

}

let paras = new employee('paras', 1, 'plazma')
// console.log(paras);
// console.log(paras.slogan());
// console.log(paras.joiningYear());
// console.log(employee.sum(1,12));

let mohan = new programmer('mohan',2,'division','javaScript','mohan3333')
console.log(mohan);
// console.log(mohan.favLang());
console.log(mohan.slogan());