class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }   

    incrementBehavior() {
        this._behavior ++;
    }
}
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
//===============================================================================================

class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
  
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);

//===============================================================================================

// ***Inheritance***  ***STATIC METHOD***

class HospitalEmployee {
    constructor(name) {
      this._name = name,
      this._remainingVacationDays = 20
}
    get name() {
      return this._name
}
    get remainingVacationDays() {
      return this._remainingVacationDays
}
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
}   
    static generatePassword() {
      return Math.floor(Math.random() * 10000);
}

};
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name)
      this._certifications = certifications
    }
    get certifications() {
      return this._certifications;
    }
    addCertification(newCertification) {
      this._certifications.push(newCertification)
    }
  };
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']); 
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name)
    this._insurance = insurance
  }
}
const ali = new Doctor('ali', 'yes')
ali.takeVacationDays(5);
console.log(ali.remainingVacationDays);
//===============================================================================================

class SchoolStaff {
  constructor(name, qualification, age, yearsOfExperience) {
    this._name = name
    this._qualification = qualification
    this._age = age
    this._yearsOfExperience = yearsOfExperience
  }
  get name() {
    return this._name;
  }
  get qualification() {
    return this.qualification;
  }
  get age() {
    return this.age;
  }
  get experience() {
    return this._yearsOfExperience;
  }
};
const Saad = new SchoolStaff('Saad Baig', 'Graduated', 19, 1);

//===============================================================================================

