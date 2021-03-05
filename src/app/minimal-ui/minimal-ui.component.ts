import { Component, OnInit } from '@angular/core';
import { UrlMatchPatternRegex, ExtensionVersionRegex, ExtensionIdRegex, ForceInstallEntryRegex } from 'src/core/constants';
import { ExtensionTypes } from 'src/core/KeyValuePair/AllowedTypes';
import { Permissions } from 'src/core/KeyValuePair/BlockedPermissions';
import RegexValidator from 'src/core/KeyValuePair/Validators/RegexValidator';

@Component({
  selector: 'app-minimal-ui',
  templateUrl: './minimal-ui.component.html',
  styleUrls: ['./minimal-ui.component.css'],
})
export class MinimalUiComponent implements OnInit {

  matchPatterValidator = new RegexValidator(UrlMatchPatternRegex);
  minVersionValidator = new RegexValidator(ExtensionVersionRegex);
  extensionIdValidator = new RegexValidator(ExtensionIdRegex);
  forceInstallEntryValidator = new RegexValidator(ForceInstallEntryRegex)

  permissionsList = Permissions.getList();
  extensionTypesList = ExtensionTypes.getList();

  constructor() {}

  ngOnInit(): void {}

  allowedTypesChanged(newTypes: string[]) {}

  blockedPermissionsChanged(newPermissions: string[]) {}

  runtimeAllowedHostsChanged(newHosts: string[]) {}

  runtimeBlockedHostsChanged(newHosts: string[]) {}

  blockedExtensionsChanged(newHosts: string[]) {}

  forceInstallListChanged(newHosts: string[]) {}
}
