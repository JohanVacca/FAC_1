import { AllowedRolePipe } from 'app/shared/pipes/allowed-role/allowed-role.pipe';

describe('AllowedRolePipe', () => {
  it('create an instance', () => {
    const pipe = new AllowedRolePipe();
    expect(pipe).toBeTruthy();
  });
});
