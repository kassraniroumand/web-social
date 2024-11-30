export const loadTemplate = async (templatePath) => {
    const response = await fetch(templatePath);
    if (!response.ok) throw new Error('Template loading failed');
    return await response.text();
};