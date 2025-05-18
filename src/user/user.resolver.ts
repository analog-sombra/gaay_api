import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Cow } from 'src/cow/entities/cow.entity';
import { UserPagination } from './entities/user.pagination.entity';
import { SearchUserPaginationInput } from './dto/search-user-pagination';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [Cow])
  getUserCows(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserCows(id);
  }

  @Query(() => User)
  getFarmerByCode(@Args('code', { type: () => String }) code: string) {
    return this.userService.getFarmerByCode(code);
  }

  @Mutation(() => User)
  editUserPhoto(
    @Args('id', { type: () => Int }) id: number,
    @Args('photo', { type: () => String }) photo: string,
  ) {
    return this.userService.editUserPhoto(id, photo);
  }

  @Mutation(() => UserPagination)
  searchUsers(
    @Args('searchUserPaginationInput')
    searchUserPaginationInput: SearchUserPaginationInput,
  ) {
    return this.userService.searchUsers(searchUserPaginationInput);
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userService.createUser(createUserInput);
  }
}
