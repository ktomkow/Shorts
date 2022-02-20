export function update(context, newNumber) {
  context.commit("mutate", newNumber);
}
