declare module '@svgr/core' {
  import { ParserPlugin } from '@babel/parser';
  import templateBuilder, { TemplateBuilderOptions } from 'babel__template';

  type TemplateBuilder = typeof templateBuilder;

  type SVGRProps = {
    componentName: any;
    props?: any;
    imports?: any;
    interfaces?: any;
    jsx: any;
  };

  interface Config {
    dimensions?: boolean;
    expandProps?: 'end';
    icon?: boolean;
    memo?: boolean;
    namedExport?: 'ReactComponent';
    native?: boolean;
    plugins?: string[];
    prettier?: boolean;
    prettierConfig?: null;
    ref?: boolean;
    replaceAttrValues?: Record<string, string>;
    runtimeConfig?: boolean;
    svgo?: boolean;
    svgoConfig?: null;
    svgProps?: Record<string, any>; // SVGElement['attributes'];
    template?: (
      { template }: State,
      _opts: TemplateBuilderOptions,
      { componentName, jsx }: SVGRProps
    ) => TemplateBuilder;
    titleProp?: boolean;
    typescript?: boolean;
  }

  interface State {
    template: TemplateBuilder;
  }

  // declare function customTemplate(
  //   { template }: TemplateProps,
  //   _opts: TemplateBuilderOptions,
  //   { componentName, jsx }: SVGRProps
  // );

  function svgr(
    code: string,
    config: Config,
    state: SVGRProps
  ): Promise<string>;

  export = svgr;
}
