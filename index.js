function hashMap() {
  return {
    buckets: new Array(16),
    keys: new Array(),
    capacity: 16,
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      hashCode = hashCode % this.capacity;
      return hashCode;
    },
    set(key, value) {
      let targetBucket = this.hash(key);
      console.log("bucket:" + targetBucket);
      if (this.buckets[targetBucket] != null) {
        if (this.keys.includes(key)) {
          console.log(
            "somethings here already, and this key exists, so we will overwrite it"
          );
          this.buckets[targetBucket] = value;
        } else {
          console.log(
            "somthings here already, This key is a new one, so we have to create a linked list"
          );
          this.keys.push(key);
        }
      } else {
        this.buckets[targetBucket] = value;
        arr.keys.push(key);
      }
    },
    get(key) {
      let targetBucket = this.hash(key);
      if (this.buckets[targetBucket] != null) {
        return this.buckets[targetBucket];
      } else {
        return null;
      }
    },
    has(key) {
        if (this.keys.includes(key)) {
            return true
        }
        else return false
    },
    remove(key){
        if (this.keys.includes(key)) {
            let targetBucket = this.hash(key)
            this.buckets[targetBucket] = null;
            let keyIndex = this.keys.findIndex(k => k === key);
            this.keys[keyIndex] = null
        }
    },
    length(){
        return this.keys.length()
    },
    clear() {
        this.buckets = null
        this.buckets = new Array(this.capacity)
        this.keys = []
    },
    getKeys() {
        return this.keys
    },
    getValues() {
        return this.buckets
    }
  };
}

const arr = hashMap();
console.log(arr.hash("sarah"));

arr.set("sarah", "902-215-0622");
arr.set("sarah", "911");
arr.set("rasah", "913");
console.log("rasah = " + arr.hash("rasah"));
console.log("sarah = " + arr.hash("sarah"));


console.table(arr.buckets);


console.log(arr.keys.length);



console.table(arr.getKeys());