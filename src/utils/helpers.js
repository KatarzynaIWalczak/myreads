//Format title - create space between words and start each word with an upper case
export function formatTitle(text) {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export function showErrorMessage(text) {
  let errorElement = document.getElementById("error-message");

  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.id = "error-message";

    const container = document.querySelector("ol.books-grid");
    if (container) {
      container.appendChild(errorElement);
    }
  }
  errorElement.textContent = text;
  errorElement.style.display = "block";
}

export function removeErrorMessage() {
  const errorElement = document.getElementById("error-message");
  if (errorElement) {
    errorElement.remove();
  }
}

export function formatBookDetails(data) {
  const {
    authors,
    averageRating,
    canonicalVolumeLink,
    contentVersion,
    description,
    imageLinks,
    infoLink,
    language,
    maturityRating,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    ratingsCount,
    subtitle,
    title,
    shelf,
  } = data;

  return {
    title: title,
    subtitle: subtitle,
    authors: authors?.length === 1 ? authors : authors?.join(", "),
    description: description,
    publisher: publisher,
    publishedDate: publishedDate,
    averageRating: averageRating,
    canonicalVolumeLink: canonicalVolumeLink,
    contentVersion: contentVersion,
    imageLink: imageLinks?.thumbnail,
    infoLink: infoLink,
    language: language,
    maturityRating: maturityRating,
    pageCount: pageCount,
    previewLink: previewLink,
    ratingsCount: ratingsCount,
    shelf: shelf,
  };
}
