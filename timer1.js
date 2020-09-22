
//node timer1.js 10 3 5 15 9 

let args = process.argv.slice(2);//[10,3,5,15,9 ]



for (let i = 0; i < args.length; i++) {

  let num = parseInt(args[i]);
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(""+num + " seconds .."+ "\n")
  }, num*1000);

}
