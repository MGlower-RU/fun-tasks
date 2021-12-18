// eslint-disable-next-line no-extend-native
Array.prototype.mapPoly = function(callback) {
  const mappedArray = []

  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray
}

export default function MapPolyfill() {
  console.log([10, 20].mapPoly(el => el*2))

  const anyFunc = () => {
    console.log('works');
  }

  anyFunc()
  
  return (
    <div>
      my own map
    </div>
  )
}