import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/primsa.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoanModule } from './loan/loan.module';
import { CowModule } from './cow/cow.module';
import { BirthModule } from './birth/birth.module';
import { LearnModule } from './learn/learn.module';
import { MarketModule } from './market/market.module';
import { MedicalModule } from './medical/medical.module';
import { BreedModule } from './breed/breed.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UploaderModule } from './uploader/uploader.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptor/responseinterceptor';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore.redisStore,
      host: 'localhost',
      port: 6379,
      db: 0, // Use database 0
      ttl: 60000, // 60 seconds
      prefix: '', // No prefix
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      sortSchema: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    LoanModule,
    CowModule,
    BirthModule,
    LearnModule,
    MarketModule,
    MedicalModule,
    BreedModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
