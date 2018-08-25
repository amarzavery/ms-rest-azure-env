// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export interface AzureEnvironmentParameters {
  /**
   * The Environment name.
   */
  readonly name: string;

  /**
   * The management portal URL.
   */
  readonly portalUrl: string;

  /**
   * The management service endpoint.
   */
  readonly managementEndpointUrl: string;

  /**
   * The resource management endpoint.
   */
  readonly resourceManagerEndpointUrl: string;

  /**
   * The Active Directory login endpoint.
   */
  readonly activeDirectoryEndpointUrl: string;

  /**
   * The resource ID to obtain AD tokens for (token audience).
   */
  readonly activeDirectoryResourceId: string;

  /**
   * The publish settings file URL.
   */
  readonly publishingProfileUrl?: string;

  /**
   * The sql server management endpoint for mobile commands.
   */
  readonly sqlManagementEndpointUrl?: string;

  /**
   * The dns suffix for sql servers.
   */
  readonly sqlServerHostnameSuffix?: string;

  /**
   * The template gallery endpoint.
   */
  readonly galleryEndpointUrl?: string;

  /**
   * The Active Directory resource ID.
   */
  readonly activeDirectoryGraphResourceId?: string;

  /**
   * The batch resource ID.
   */
  readonly batchResourceId?: string;

  /**
   * The Active Directory api version.
   */
  readonly activeDirectoryGraphApiVersion?: string;

  /**
   * The endpoint suffix for storage accounts.
   */
  readonly storageEndpointSuffix?: string;

  /**
   * The keyvault service dns suffix.
   */
  readonly keyVaultDnsSuffix?: string;

  /**
   * The data lake store filesystem service dns suffix.
   */
  readonly azureDataLakeStoreFileSystemEndpointSuffix?: string;

  /**
   * The data lake analytics job and catalog service dns suffix.
   */
  readonly azureDataLakeAnalyticsCatalogAndJobEndpointSuffix?: string;

  /**
   * Determines whether the authentication endpoint should be validated with Azure AD. Default value is true.
   */
  readonly validateAuthority?: boolean;
}

export class AzureEnvironment {
  /**
   * The Environment name.
   */
  readonly name: string;

  /**
   * The management portal URL.
   */
  readonly portalUrl: string;

  /**
   * The management service endpoint.
   */
  readonly managementEndpointUrl: string;

  /**
   * The resource management endpoint.
   */
  readonly resourceManagerEndpointUrl: string;

  /**
   * The Active Directory login endpoint.
   */
  readonly activeDirectoryEndpointUrl: string;

  /**
   * The resource ID to obtain AD tokens for (token audience).
   */
  readonly activeDirectoryResourceId: string;

  /**
   * The publish settings file URL.
   */
  readonly publishingProfileUrl?: string;

  /**
   * The sql server management endpoint for mobile commands.
   */
  readonly sqlManagementEndpointUrl?: string;

  /**
   * The dns suffix for sql servers.
   */
  readonly sqlServerHostnameSuffix?: string;

  /**
   * The template gallery endpoint.
   */
  readonly galleryEndpointUrl?: string;

  /**
   * The batch resource ID.
   */
  readonly batchResourceId?: string;

  /**
   * The Active Directory resource ID.
   */
  readonly activeDirectoryGraphResourceId?: string;

  /**
   * The Active Directory api version.
   */
  readonly activeDirectoryGraphApiVersion?: string;

  /**
   * The endpoint suffix for storage accounts.
   */
  readonly storageEndpointSuffix?: string;

  /**
   * The keyvault service dns suffix.
   */
  readonly keyVaultDnsSuffix?: string;

  /**
   * The data lake store filesystem service dns suffix.
   */
  readonly azureDataLakeStoreFileSystemEndpointSuffix?: string;

  /**
   * The data lake analytics job and catalog service dns suffix.
   */
  readonly azureDataLakeAnalyticsCatalogAndJobEndpointSuffix?: string;

  /**
   * Determines whether the authentication endpoint should be validated with Azure AD. Default value is true.
   */
  readonly validateAuthority: boolean = true;

  constructor(parameters: AzureEnvironmentParameters) {

    if (!parameters || typeof parameters !== "object") {
      throw new Error("'parameters' is a required parameter and must be of type 'object'.");
    }

    // Validate required parameters
    const requiredParams = ["name", "portalUrl", "managementEndpointUrl", "resourceManagerEndpointUrl",
      "activeDirectoryEndpointUrl", "activeDirectoryResourceId"];
    requiredParams.forEach(function (param) {
      if (!(<any>parameters)[param] || typeof (<any>parameters)[param].valueOf() !== "string") {
        throw new Error(`Please provide "${param}" for the environment and it must be of type "string".`);
      }
    });

    this.name = parameters.name;
    this.portalUrl = parameters.portalUrl;
    this.managementEndpointUrl = parameters.managementEndpointUrl;
    this.resourceManagerEndpointUrl = parameters.resourceManagerEndpointUrl;
    this.activeDirectoryEndpointUrl = parameters.activeDirectoryEndpointUrl;
    this.activeDirectoryResourceId = parameters.activeDirectoryResourceId;
    if (this.activeDirectoryGraphApiVersion) {
      this.activeDirectoryGraphApiVersion = parameters.activeDirectoryGraphApiVersion;
    }
    if (this.activeDirectoryGraphResourceId) {
      this.activeDirectoryGraphResourceId = parameters.activeDirectoryGraphResourceId;
    }
    if (this.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix) {
      this.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix = parameters.azureDataLakeAnalyticsCatalogAndJobEndpointSuffix;
    }

    if (this.azureDataLakeStoreFileSystemEndpointSuffix) {
      this.azureDataLakeStoreFileSystemEndpointSuffix = parameters.azureDataLakeStoreFileSystemEndpointSuffix;
    }

    if (this.batchResourceId) {
      this.batchResourceId = parameters.batchResourceId;
    }

    if (this.galleryEndpointUrl) {
      this.galleryEndpointUrl = parameters.galleryEndpointUrl;
    }

    if (this.keyVaultDnsSuffix) {
      this.keyVaultDnsSuffix = parameters.keyVaultDnsSuffix;
    }

    if (this.publishingProfileUrl) {
      this.publishingProfileUrl = parameters.publishingProfileUrl;
    }

    if (this.sqlManagementEndpointUrl) {
      this.sqlManagementEndpointUrl = parameters.sqlManagementEndpointUrl;
    }

    if (this.sqlServerHostnameSuffix) {
      this.sqlServerHostnameSuffix = parameters.sqlServerHostnameSuffix;
    }

    if (this.storageEndpointSuffix) {
      this.storageEndpointSuffix = parameters.storageEndpointSuffix;
    }
  }

  static add(parameters: AzureEnvironmentParameters): void {
    const envContainer: { [name: string]: AzureEnvironment } = {};
    const envObj = new AzureEnvironment(parameters);
    envContainer[parameters.name] = envObj;
    Object.assign(AzureEnvironment, envContainer);
    return;
  }

  static get(name: string): AzureEnvironment {
    if (!name) {
      throw new TypeError("name cannot be null or undefined and must be of type string.");
    }
    return (AzureEnvironment as any)[name];
  }

  static readonly Azure = {
    name: "Azure",
    portalUrl: "https://portal.azure.com",
    publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkId=254432",
    managementEndpointUrl: "https://management.core.windows.net",
    resourceManagerEndpointUrl: "https://management.azure.com/",
    sqlManagementEndpointUrl: "https://management.core.windows.net:8443/",
    sqlServerHostnameSuffix: ".database.windows.net",
    galleryEndpointUrl: "https://gallery.azure.com/",
    activeDirectoryEndpointUrl: "https://login.microsoftonline.com/",
    activeDirectoryResourceId: "https://management.core.windows.net/",
    activeDirectoryGraphResourceId: "https://graph.windows.net/",
    batchResourceId: "https://batch.core.windows.net/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.windows.net",
    keyVaultDnsSuffix: ".vault.azure.net",
    azureDataLakeStoreFileSystemEndpointSuffix: "azuredatalakestore.net",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "azuredatalakeanalytics.net",
    validateAuthority: true
  };
  static readonly AzureChina = {
    name: "AzureChina",
    portalUrl: "https://portal.azure.cn",
    publishingProfileUrl: "https://go.microsoft.com/fwlink/?LinkID=301774",
    managementEndpointUrl: "https://management.core.chinacloudapi.cn",
    resourceManagerEndpointUrl: "https://management.chinacloudapi.cn",
    sqlManagementEndpointUrl: "https://management.core.chinacloudapi.cn:8443/",
    sqlServerHostnameSuffix: ".database.chinacloudapi.cn",
    galleryEndpointUrl: "https://gallery.chinacloudapi.cn/",
    activeDirectoryEndpointUrl: "https://login.chinacloudapi.cn/",
    activeDirectoryResourceId: "https://management.core.chinacloudapi.cn/",
    activeDirectoryGraphResourceId: "https://graph.chinacloudapi.cn/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    batchResourceId: "https://batch.chinacloudapi.cn/",
    storageEndpointSuffix: ".core.chinacloudapi.cn",
    keyVaultDnsSuffix: ".vault.azure.cn",
    // TODO: add dns suffixes for the china cloud for datalake store and datalake analytics once they are defined.
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
  };
  static readonly AzureUSGovernment = {
    name: "AzureUSGovernment",
    portalUrl: "https://portal.azure.us",
    publishingProfileUrl: "https://manage.windowsazure.us/publishsettings/index",
    managementEndpointUrl: "https://management.core.usgovcloudapi.net",
    resourceManagerEndpointUrl: "https://management.usgovcloudapi.net",
    sqlManagementEndpointUrl: "https://management.core.usgovcloudapi.net:8443/",
    sqlServerHostnameSuffix: ".database.usgovcloudapi.net",
    galleryEndpointUrl: "https://gallery.usgovcloudapi.net/",
    activeDirectoryEndpointUrl: "https://login-us.microsoftonline.com/",
    activeDirectoryResourceId: "https://management.core.usgovcloudapi.net/",
    activeDirectoryGraphResourceId: "https://graph.windows.net/",
    batchResourceId: "https://batch.core.usgovcloudapi.net/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.usgovcloudapi.net",
    keyVaultDnsSuffix: ".vault.usgovcloudapi.net",
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
  };
  static readonly AzureGermanCloud = {
    name: "AzureGermanCloud",
    portalUrl: "https://portal.microsoftazure.de/",
    publishingProfileUrl: "https://manage.microsoftazure.de/publishsettings/index",
    managementEndpointUrl: "https://management.core.cloudapi.de",
    resourceManagerEndpointUrl: "https://management.microsoftazure.de",
    sqlManagementEndpointUrl: "https://management.core.cloudapi.de:8443/",
    sqlServerHostnameSuffix: ".database.cloudapi.de",
    galleryEndpointUrl: "https://gallery.cloudapi.de/",
    activeDirectoryEndpointUrl: "https://login.microsoftonline.de/",
    activeDirectoryResourceId: "https://management.core.cloudapi.de/",
    activeDirectoryGraphResourceId: "https://graph.cloudapi.de/",
    batchResourceId: "https://batch.microsoftazure.de/",
    activeDirectoryGraphApiVersion: "2013-04-05",
    storageEndpointSuffix: ".core.cloudapi.de",
    keyVaultDnsSuffix: ".vault.microsoftazure.de",
    azureDataLakeStoreFileSystemEndpointSuffix: "N/A",
    azureDataLakeAnalyticsCatalogAndJobEndpointSuffix: "N/A",
    validateAuthority: true
  };
}
