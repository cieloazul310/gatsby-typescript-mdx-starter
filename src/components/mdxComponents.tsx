import * as React from 'react';

function Pre({
  children,
  className,
}: any) {
  return (
    <pre
      className={className ?? undefined}
      style={{
        margin: '2em auto',
        padding: '2em',
        background: '#eee',
        borderRadius: '.2em',
        fontSize: '1.2em',
      }}
    >
      {children}
    </pre>
  );
}

function Code({
  children,
  className,
}: any) {
  return className ? (
    <code>{children}</code>
  ) : (
    <code
      style={{
        background: '#eee',
        borderRadius: '.2em',
        fontSize: '1.2em',
        padding: '0 .2em',
      }}
    >
      {children}
    </code>
  );
}

const mdxComponents = { pre: Pre, code: Code };

export default mdxComponents;
