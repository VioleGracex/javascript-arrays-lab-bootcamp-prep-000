// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name)
{
  kittens.push(name);
    return kittens;
}
function destructivelyPrependKitten(name)
{
  kittens.shift(name);
  return kittens;
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten (name)
{
  var newarray=kittens.push(name);
  return newarray;


}
function prependKitten (name)
{
  kittens.shift(name);

}
