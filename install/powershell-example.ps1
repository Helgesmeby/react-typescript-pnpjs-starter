# Powershell example for building and uploading files to SharePoint
# - Based on Team site (STS#0) template. 


Install-Module SharePointPnPPowerShellOnline -AllowClobber 
#Install-Module SharePointPnPPowerShell2016  -AllowClobber # SP 2016 OP
#Install-Module SharePointPnPPowerShell2013  -AllowClobber # SP 2013 OP



$TenantUrl = "https://tenantname.sharepoint.com/"; 
$AdminUser = "admin@tenantname.onmicrosoft.com"; 
$ServerLibraryLocation = "SiteAssets/apps/react-typescript-pnpjs-example/"; 
$LocalDistDirectory = "D:\dev\react-typescript-pnpjs-starter\dist\" 
$LocalFiles = @("bundle.js", "react.js", "react-dom.js", "AppDemo.aspx"); 

Write-Host "Connecting to SharePoint"; 
Connect-PnPOnline -Url $TenantUrl  -Credentials (Get-Credential -Message "Enter admin password." -UserName $AdminUser) 

Write-Host "Building application"; 
cd $LocalDistDirectory
cd .. 
webpack 

Write-Host "Copying files to SharePoint"; 
ForEach ($file in $LocalFiles)
{
    $dir = ""; 
    if($file.EndsWith(".js")){
        $dir = "/js/";
    }
    Add-PnPFile -Path $($LocalDistDirectory + $dir + $file) -Folder $($ServerLibraryLocation + $dir)
}

Write-Host "All done!"; 