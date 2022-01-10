import { App, DefineComponent } from 'vue';
import { version } from '../package.json';

console.log('pkg', version);

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
type ComponentType = DefineComponent<{}, {}, any>;

export interface UiInstance {
  version: string;
  componentPrefix: string;
  install: (app: App) => void;
}

interface UiCreateOptions {
  components?: ComponentType[];
  componentPrefix?: string;
}

export default function create({ componentPrefix = '', components = [] }: UiCreateOptions = {}): UiInstance {
  const installTargets: App[] = [];

  function registerComponent(app: App, name: string, component: ComponentType): void {
    const registered = app.component(componentPrefix + name);
    if (!registered) {
      app.component(componentPrefix + name, component);
    }
  }

  function install(app: App): void {
    if (installTargets.includes(app)) return;
    installTargets.push(app);
    components.forEach((component) => {
      registerComponent(app, component.name, component);
    });
  }

  return {
    version,
    install,
    componentPrefix,
  };
}
