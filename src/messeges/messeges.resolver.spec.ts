import { Test, TestingModule } from '@nestjs/testing';
import { MessegesResolver } from './messeges.resolver';
import { MessegesService } from './messeges.service';

describe('MessegesResolver', () => {
  let resolver: MessegesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessegesResolver, MessegesService],
    }).compile();

    resolver = module.get<MessegesResolver>(MessegesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
