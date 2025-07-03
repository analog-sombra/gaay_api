import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput, CreateUserLoanInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Cow } from 'src/cow/entities/cow.entity';
import { UserPagination } from './entities/user.pagination.entity';
import { SearchUserPaginationInput } from './dto/search-user-pagination';
import { CreateStaffInput } from './dto/create-staff.input';

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

  @Mutation(() => [User])
  searchUsersByRole(@Args('role', { type: () => [String] }) role: string[]) {
    return this.userService.searchUsersByRole(role);
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Args('createUserLoanInput') createUserLoanInput: CreateUserLoanInput,
  ) {
    return this.userService.createUser(createUserInput, createUserLoanInput);
  }

  @Mutation(() => User)
  createStaff(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.userService.createStaff(createStaffInput);
  }

  @Query(() => User)
  latestFarmer() {
    return this.userService.getLatestFarmer();
  }

  @Query(() => String)
  getUserCode() {
    return this.userService.getUserCode();
  }
}
