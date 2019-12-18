import { FormControl, FormGroup, FormArray } from '@angular/forms';

export interface FamilyTreeModel {
  name: string;
  age: number;
  children: FamilyTreeModel[];
}

export const createFamilyTreeGroup = (model: FamilyTreeModel) => {
  return new FormGroup({
    name: new FormControl(model.name),
    age: new FormControl(model.age),
    children: new FormArray(
      model.children.map(child => createFamilyTreeControl(child))
    )
  });
};

export const createFamilyTreeControl = (model: FamilyTreeModel) =>
  new FormControl(model);

export const updateFamilyTreeFormGroup = (
  group: FormGroup,
  newModel: FamilyTreeModel
) => {
  group.get('name').setValue(newModel.name);
  group.get('age').setValue(newModel.age);
  const childrenArray = group.get('children') as FormArray;
  while (childrenArray.controls.length > 0) {
    childrenArray.removeAt(0);
  }
  newModel.children.forEach(child =>
    childrenArray.push(createFamilyTreeControl(child))
  );
};
