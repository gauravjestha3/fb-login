import { FbRoutingModule } from './fb-routing.module';

describe('FbRoutingModule', () => {
  let fbRoutingModule: FbRoutingModule;

  beforeEach(() => {
    fbRoutingModule = new FbRoutingModule();
  });

  it('should create an instance', () => {
    expect(fbRoutingModule).toBeTruthy();
  });
});
