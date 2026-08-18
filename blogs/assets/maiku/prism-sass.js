Prism.languages.sass = {
    'comment': /\/\/.*/,
    'string': /`\([^)]*\)/,
    'variable': /\bU?R[Z\d]+\b|\bU?P[T\d]+\b/,
    'number': /-?\b0x[\da-fA-F]+\b|-?\b\d+(?:\.\d+)?\b/,
    'keyword': /\b[A-Z][A-Z0-9]*(?:\.[A-Z0-9_]+)*\b/,
    'operator': /@!?/,
    'punctuation': /[,;()[\]+]/
};
