function unhide_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.remove('hidden');
}

function hide_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.add('hidden');
}

function spoiler(element: HTMLElement): void {
  element.classList.toggle('blur');
}

function clearBox(elem: string): void {
  const versionSetting = ((
    document.getElementById('version-setting') as HTMLInputElement
  ).value = 'vanilla');

  const mainSetting = ((
    document.getElementById('main-setting') as HTMLInputElement
  ).value = 'classic');

  const goalsSetting = ((
    document.getElementById('goals-setting') as HTMLInputElement
  ).value = 'disabled');

  const blueprintSetting = ((
    document.getElementById('blueprint-setting') as HTMLInputElement
  ).value = 'disabled');

  const firstExpansion = ((
    document.getElementById('first-expansion') as HTMLInputElement
  ).value = 'none');

  const secondExpansion = ((
    document.getElementById('second-expansion') as HTMLInputElement
  ).value = 'none');

  (document.getElementById(elem) as HTMLInputElement).innerHTML = '';
}

function clearLocalStorage(): void {
  hide_elem('results');
  hide_elem('game-goals');
  unhide_elem('main-menu');
  localStorage.clear();
}

// Helpers
function getInputElementValue(id: string): string {
  const inputElement = document.getElementById(id) as HTMLInputElement | null;

  // Check if the element is present before accessing its value
  if (inputElement) {
    return inputElement.value;
  } else {
    // Handle the case when the element is not found
    console.error(`Element with id '${id}' not found.`);
    return ''; // or any default value you want
  }
}

function randUniqueItems(myList: string[], amount: number): string[] {
  if (amount >= myList.length) {
    return myList.slice(); // Return a copy of the original list since all items are unique
  }

  const uniqueItems: Set<string> = new Set();

  while (uniqueItems.size < amount) {
    const randomItem = randItem(myList);
    uniqueItems.add(randomItem);
  }

  return Array.from(uniqueItems);
}

function randItem(myList: string[]): string {
  if (myList.length === 0) {
    return '';
  }
  return myList[Math.floor(Math.random() * myList.length)];
}
