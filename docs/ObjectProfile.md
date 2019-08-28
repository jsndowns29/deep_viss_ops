# DeepVissOps.ObjectProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the object profile, containing several ObjectInstance. ObjectProfiles belong to ObjectCollections. | [optional] 
**externalId** | **String** | The ID of the object profile, containing several ObjectInstance. ObjectProfiles belong to ObjectCollections. | [optional] 
**collectionId** | **String** | The ID of parent collection. | [optional] 
**croppedImageURLs** | **[String]** | The list of object instances statically assigned to the object profile. | [optional] 
**displayName** | **String** | The human-readable name of the profile | [optional] 
**instances** | [**[ObjectInstance]**](ObjectInstance.md) | The list of object instances statically assigned to the object profile. | [optional] 
**attributes** | **{String: String}** |  | [optional] 
**occurrences** | [**[ObjectOccurrence]**](ObjectOccurrence.md) | The list of object instances dynamically assigned to the object profile. | [optional] 


