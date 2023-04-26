import { Rule, SchematicContext, SchematicsException, Tree } from "@angular-devkit/schematics";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { addImportToModule } from "@schematics/angular/utility/ast-utils";
import { applyToUpdateRecorder } from "@schematics/angular/utility/change";
import * as ts from "typescript";

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info("Mirayes UI Schematics: Adding library Module to the app...");
    const modulePath = '/src/app/app.module.ts';
    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`The file ${modulePath} does not exist...`);
    }

    const recorder = tree.beginUpdate(modulePath);

    const text = tree.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`The file ${modulePath} does not exist...`);
    }

    const source = ts.createSourceFile(
      modulePath,
      text.toString(),
      ts.ScriptTarget.Latest,
      true
    );

    applyToUpdateRecorder(recorder,
      addImportToModule(
        source,
        modulePath,
        'MirayesUiModule',
        'mirayes-ui',
      )
    );

    tree.commitUpdate(recorder);

    context.logger.info("Mirayes UI Schematics: Installing dependencies...");
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
