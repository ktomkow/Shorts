export function someAction(context, newNumber) {
  context.commit("mutate", newNumber);
}
