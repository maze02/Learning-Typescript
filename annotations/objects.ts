const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    //not returning anything, simply setting the person's age
    this.age = age;
  },
};
//const age = profile.age  //destructuring
//have to write the expected structure on the right handside
const { age, name }: { age: number; name: string } = profile; //:structure of the profile object

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
