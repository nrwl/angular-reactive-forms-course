import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface DateRange {
  start: Date;
  end: Date;
}

const dateRangeValidation = (dateRange: DateRange) => {
  const validationErrors = {};
  if (!dateRange.start) {
    validationErrors['invalidStart'] = true;
  }
  if (!dateRange.end) {
    validationErrors['invalidEnd'] = true;
  }
  if (
    dateRange.start &&
    dateRange.end &&
    dateRange.start.valueOf() > dateRange.end.valueOf()
  ) {
    validationErrors['startIsAfterEnd'] = true;
  }
  return Object.keys(validationErrors).length ? validationErrors : null;
};

export const createDateRangePickerFormGroup = (
  dateRange: DateRange = { start: new Date(), end: new Date() }
): FormGroup =>
  new FormGroup(
    {
      start: new FormControl(dateRange.start, Validators.required),
      end: new FormControl(dateRange.end, Validators.required)
    },
    (group: FormGroup) => dateRangeValidation(group.value as DateRange)
  );

export const createDateRangePickerFormControl = (
  dateRange: DateRange = { start: new Date(), end: new Date() }
): FormControl =>
  new FormControl(dateRange, control => dateRangeValidation(control.value));

export const isDateWithinRange = (date: Date, range: DateRange): boolean =>
  date.valueOf() >= range.start.valueOf() &&
  date.valueOf() <= range.end.valueOf();
