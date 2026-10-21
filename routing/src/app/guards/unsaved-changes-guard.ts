import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<any> = (component) => {
  if (component.hasUnsavedChanges) {
    return confirm('Are you sure you want to leave? You have lose your unsaved changes.');
  }
  return true;
};
