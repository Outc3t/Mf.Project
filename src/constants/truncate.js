export default function truncate(text,amount){
// console.log(amount)
if(text.length>Number(amount))
return text.slice(0,Number(amount))+'...'
return text
}