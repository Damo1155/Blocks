type ManipulateContentRequest = {
  content: string;
  replacements?: Record<string, string>;
};

export const manipulateContent = ({
  content,
  replacements,
}: ManipulateContentRequest) => {
  let text = content;

  Object.entries(replacements ?? []).forEach((records) => {
    const delimiter = records[0];
    const regExp = new RegExp(delimiter, 'g');
    text = text?.replaceAll(regExp, records[1]) ?? '';
  });

  return text;
};
