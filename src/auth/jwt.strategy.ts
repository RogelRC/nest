import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    } as StrategyOptions);
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
